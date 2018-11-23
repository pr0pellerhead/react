import React from "react";

export const UsersTable = (props) => {
    return(
        <div className="users-table">
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Municipality</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Mario Petkovski</td>
                        <td>mario5etkovski@gmail.com</td>
                        <td>Admin</td>
                        <td>Macedonia</td>
                        <td>City</td>
                        <td>Opstina Aerodrom</td>
                        <td><button>-</button></td>
                    </tr>
                    <tr>
                        <td>Mario Petkovski</td>
                        <td>mario5etkovski@gmail.com</td>
                        <td>Admin</td>
                        <td>Macedonia</td>
                        <td>City</td>
                        <td>Opstina Aerodrom</td>
                        <td><button>-</button></td>
                    </tr>
                    <tr>
                        <td>Mario Petkovski</td>
                        <td>mario5etkovski@gmail.com</td>
                        <td>Admin</td>
                        <td>Macedonia</td>
                        <td>City</td>
                        <td>Opstina Aerodrom</td>
                        <td><button>-</button></td>
                    </tr>
                </tbody>
            </table>          
        </div>
    )
}