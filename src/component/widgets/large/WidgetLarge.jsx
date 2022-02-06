import "./widgetLarge.css"

const WidgetLarge = () => {

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }


  return <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgtr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2055</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat" className="widgetLgImg" />
            <span className="widgetLgName">Carol Suan</span>
          </td>
          <td className="widgetLgDate">2 Jun 2055</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat" className="widgetLgImg" />
            <span className="widgetLgName">Katie Adams</span>
          </td>
          <td className="widgetLgDate">2 Jun 2055</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/3759364/pexels-photo-3759364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat" className="widgetLgImg" />
            <span className="widgetLgName">Toy Duck</span>
          </td>
          <td className="widgetLgDate">2 Jun 2055</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
  </div>;
};

export default WidgetLarge;
