import React, { Component } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Search(props) {
  return (
    <>
      <Stack>
        <Form>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="3"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <div>아이템 검색 </div>
        <div className="vr" />
        <Form.Group className="mb-3" controlId="formBasickeyword">
          <Form.Control type="keyword" placeholder="Enter keyword" />
        </Form.Group>
        <Button variant="primary" type="search">
          찾기
        </Button>
        <div className="vr" />
        <Button variant="outline-danger" type="reset">
          초기화
        </Button>
      </Stack>
    </>
  );
}
export default Search;
