'use client';
import { User } from "@/types/User";
import updateUserRole from "@/app/admin/users/functions/updateUserRole";

interface UserTableLineProps {
    user: User;
}

const UserTableLine: React.FC<UserTableLineProps> = ({ user }) => {
    const handleRoleChange = (newRole: string) => {
        console.log(`User ${user.id} role changed to ${newRole}`);
        updateUserRole(newRole, user);
    };

    return (
        <tr key={user.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">
                <select
                    className="border border-gray-300 rounded p-1"
                    value={user.role}
                    onChange={(e) => handleRoleChange(e.target.value)}
                >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                </select>
            </td>
        </tr>
    );
};

export default UserTableLine;
