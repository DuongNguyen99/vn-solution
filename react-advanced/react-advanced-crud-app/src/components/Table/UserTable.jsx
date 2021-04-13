import React from "react"
import { Table } from "rsuite"
import ActionCell from "./ActionCell/ActionCell"

import "rsuite/dist/styles/rsuite-default.css"
// import styles from "./UserTable.module.css"

const { Column, HeaderCell, Cell } = Table

const Header = (props) => (
  <HeaderCell
    {...props}
    style={{ padding: "0 10px", fontSize: "1rem", color: "black", fontWeight: 600 }}
  />
)

const UserTable = (props) => {
  return (
    <div>
      <Table data={props.users} autoHeight rowHeight={56}>
        <Column flexGrow={1} verticalAlign="middle">
          <Header>Id</Header>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={2} verticalAlign="middle">
          <Header>Name</Header>
          <Cell dataKey="name" />
        </Column>

        <Column flexGrow={3} verticalAlign="middle">
          <Header>Username</Header>
          <Cell dataKey="userName" />
        </Column>

        <Column flexGrow={2} verticalAlign="middle">
          <Header>Actions</Header>
          <ActionCell onEdit={props.onEdit} onDelete={props.onDelete} />
        </Column>
      </Table>
    </div>
  )
}

export default UserTable