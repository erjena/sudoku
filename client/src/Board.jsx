import React from 'react';
import '../dist/styles.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const row = Number(e.target.id[0]);
    const col = Number(e.target.id[1]);
    this.props.onValueChange(row, col, e.target.value);
  }

  render() {
    const rows = this.props.grid.map((r, i) => {
      const cells = r.map((c, j) => {
        const id = i.toString() + j.toString();
        const value = c === 0 ? '' : c;
        return (
        <td key={id}>
          <input id={id} type="text" maxLength="1" value={value} onChange={this.handleChange} className="cell" autoComplete="off"/>
        </td>)
      });
      return (
        <tr key={i.toString()}>
          {cells}
        </tr>
      )
    });
    return(
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
