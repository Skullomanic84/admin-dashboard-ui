import React from 'react'
import './WidgeLarge.css'

function WidgetLarge() {

    const Button = ({ type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>

            <table className="widgetLgTable">
                {/* table row with table heading */}
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {/* table data */}
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        alt="" 
                        className="widgetLgImg" />
                        <span className="widgetLgName">Susan Kaiko</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">R2043.50</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        alt="" 
                        className="widgetLgImg" />
                        <span className="widgetLgName">Susan Kaiko</span>
                    </td>
                    
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">R2043.50</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        alt="" 
                        className="widgetLgImg" />
                        <span className="widgetLgName">Susan Kaiko</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">R2043.50</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        alt="" 
                        className="widgetLgImg" />
                        <span className="widgetLgName">Susan Kaiko</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">R2043.50</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        alt="" 
                        className="widgetLgImg" />
                        <span className="widgetLgName">Susan Kaiko</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">R2043.50</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        alt="" 
                        className="widgetLgImg" />
                        <span className="widgetLgName">Susan Kaiko</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">R2043.50</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                
            </table>
        </div>
    )
}

export default WidgetLarge
