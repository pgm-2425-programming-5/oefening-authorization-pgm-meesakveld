'use server'
import { User } from "@/types/User";
import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";

const userpath = path.join(process.cwd(), "src/lib/users.json");

export default async function updateUserRole(newRole: string, currentUser: User) {

    // Find the user in the users array
    const users = JSON.parse(fs.readFileSync(userpath, "utf-8")) as User[];

    const updatedUsers = users.map(user => {
        if (user.id === currentUser.id) {
            return {
                ...user,
                role: newRole
            };
        }
        return user;
    });

    // Update the user's role
    fs.writeFileSync(userpath, JSON.stringify(updatedUsers, null, 4));

    // Reload the page
    return redirect("/admin/users");
}