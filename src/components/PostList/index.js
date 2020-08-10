import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="report content" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default PostList;
