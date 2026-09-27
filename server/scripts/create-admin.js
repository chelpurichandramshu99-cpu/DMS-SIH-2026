import bcrypt from "bcrypt";
import prisma from "../src/config/db.js";

async function createAdmin() {
  const email = "admin@dms.local";
  const password = "Admin@123";

  try {
    const existingAdmin = await prisma.user.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      console.log(`User ${email} already exists!`);
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: "System Administrator",
        email: email,
        password: hashedPassword,
        isActive: true,
      },
    });

    // Try to assign the SYSTEM_ADMINISTRATOR role if roles are seeded
    const role = await prisma.role.findUnique({
      where: { name: "SYSTEM_ADMINISTRATOR" },
    });

    if (role) {
      await prisma.userRole.create({
        data: {
          userId: user.id,
          roleId: role.id,
        },
      });
      console.log("SYSTEM_ADMINISTRATOR role assigned.");
    } else {
      console.log("Note: SYSTEM_ADMINISTRATOR role not found. Run 'node prisma/seed.js' first.");
    }

    console.log(`\nAdmin user created successfully!`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}\n`);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
