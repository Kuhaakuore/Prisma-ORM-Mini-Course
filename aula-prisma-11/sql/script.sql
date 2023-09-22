CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

INSERT INTO "users" ("name", "email") VALUES ('teste1', 'teste1@gmail.com');
INSERT INTO "users" ("name", "email") VALUES ('teste2', 'teste2@gmail.com');
INSERT INTO "users" ("name", "email") VALUES ('teste3', 'teste3@gmail.com');
INSERT INTO "users" ("name", "email") VALUES ('teste4', 'teste4@gmail.com');
INSERT INTO "users" ("name", "email") VALUES ('teste5', 'teste5@gmail.com');