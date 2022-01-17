import { Table } from "react-bootstrap";
import Style from "./income.module.css";

function Income() {
  const element = (
    <section>
      <h1>Income Transaction</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Product Order</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Bogor</td>
            <td>Paket Geprek Bensu</td>
            <td> <span className={Style.waiting}> Waiting Approve </span></td>
            <td>
              <button className={Style.cancelBtn}>Cancel</button>
              <button className={Style.approveBtn}>Approve</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Paket Geprek Bensu</td>
            <td><span className={Style.success}>Succes</span></td>
            <td><i className={`uil uil-check-circle ${Style.successIcon}`}></i></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Bogor</td>
            <td>Paket Geprek Bensu</td>
            <td ><span className={Style.cancel}>Cancel</span></td>
            <td><i className={`uil uil-times-circle ${Style.cancelIcon}`}></i></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Larry the Bird</td>
            <td>Bogor</td>
            <td>Paket Geprek Bensu</td>
            <td><span className={Style.otw}>On The Way</span></td>
            <td><i className={`uil uil-clock ${Style.otwIcon}`}></i></td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
  return element;
}
export default Income;
