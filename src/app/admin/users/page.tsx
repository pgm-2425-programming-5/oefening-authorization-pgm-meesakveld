'use server'
import fs from "fs";
import path from "path";
import UserTableLine from "./components/UserTableLine";
import { User } from "@/types/User";

const userpath = path.join(process.cwd(), "src/lib/users.json");

const UsersPage: React.FC = () => {
    const users: User[] = JSON.parse(fs.readFileSync(userpath, "utf-8"));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserTableLine key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;
