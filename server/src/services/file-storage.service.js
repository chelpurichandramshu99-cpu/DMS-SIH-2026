import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { calculateSHA256 } from "./file-hash.service.js";
import s3Client from "../config/s3.js";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const bucketName = process.env.S3_BUCKET_NAME;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localUploadsDir = path.join(__dirname, "../../uploads");

export const uploadFileToStorage = async (file) => {
  if (!file) {
    throw new Error("File is required");
  }

  const sha256 = calculateSHA256(file.buffer);
  const ext = path.extname(file.originalname || "") || "";
  const objectKey = `test/${Date.now()}-${file.originalname}`;

  if (bucketName) {
    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
        Body: file.buffer,
        ContentType: file.mimetype,
      });
      await s3Client.send(command);
    } catch (s3Error) {
      console.warn("S3 upload failed, falling back to local storage:", s3Error.message);
      const fullPath = path.join(localUploadsDir, objectKey);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, file.buffer);
    }
  } else {
    const fullPath = path.join(localUploadsDir, objectKey);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, file.buffer);
  }

  return {
    objectKey,
    bucket: bucketName || "local",
    sha256
  };
};

export const getFileFromStorage = async (objectKey) => {
  if (bucketName) {
    try {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
      });
      return await s3Client.send(command);
    } catch (s3Error) {
      console.warn("S3 get failed, falling back to local storage:", s3Error.message);
      const fullPath = path.join(localUploadsDir, objectKey);
      const buffer = await fs.readFile(fullPath);
      return {
        Body: {
          transformToByteArray: async () => new Uint8Array(buffer),
        },
      };
    }
  } else {
    const fullPath = path.join(localUploadsDir, objectKey);
    const buffer = await fs.readFile(fullPath);
    // Mock the S3 GetObjectCommand response structure
    return {
      Body: {
        transformToByteArray: async () => new Uint8Array(buffer),
        // If the codebase uses other properties, add them here
      },
    };
  }
};

export const uploadCaseFileToStorage = async ({ file, caseId, fileId }) => {
  if (!file) {
    throw new Error("File is required");
  }

  const ext = path.extname(file.originalname || "") || "";
  const objectKey = `cases/${caseId}/files/${fileId}${ext}`;

  if (bucketName) {
    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
        Body: file.buffer,
        ContentType: file.mimetype,
      });
      await s3Client.send(command);
    } catch (s3Error) {
      console.warn("S3 upload failed, falling back to local storage:", s3Error.message);
      const fullPath = path.join(localUploadsDir, objectKey);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, file.buffer);
    }
  } else {
    const fullPath = path.join(localUploadsDir, objectKey);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, file.buffer);
  }

  return objectKey;
};

export const deleteFileFromStorage = async (objectKey) => {
  if (bucketName) {
    try {
      const command = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
      });
      await s3Client.send(command);
    } catch (s3Error) {
      console.warn("S3 delete failed, falling back to local storage:", s3Error.message);
      try {
        const fullPath = path.join(localUploadsDir, objectKey);
        await fs.unlink(fullPath);
      } catch (error) {
        console.error("Local file delete failed:", error);
      }
    }
  } else {
    try {
      const fullPath = path.join(localUploadsDir, objectKey);
      await fs.unlink(fullPath);
    } catch (error) {
      console.error("Local file delete failed:", error);
    }
  }
};