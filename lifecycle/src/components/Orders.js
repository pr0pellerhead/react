import React from "react";

export class Orders extends React.Component {
    render() {

        let headers = Object.keys(this.props.orders[0]);
        console.log(headers);

        const tableData = () => {
            for(var i = 0; i < headers.length; i++) {
                this.props.orders.forEach((item) => {
                    console.log("CONSOLE", headers[item.order_name]);
                })

            }
        }

        console.log(tableData())
        return(
            <div className="orders">
                <table>
                    <thead>
                        <tr>
                            <th>Order #</th>        
                            <th>Order Name</th>
                            <th>Order Date</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                            {
                                this.props.orders.map((order) => {
                                    return (
                                        <tr key={order.id}>
                                            <td >
                                                {order.id}
                                            </td>
                                            <td >
                                                {order.order_name}
                                            </td>
                                            <td >
                                                {order.order_date}
                                            </td>
                                            <td >
                                                {order.order_status ? "true" : "false"}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}