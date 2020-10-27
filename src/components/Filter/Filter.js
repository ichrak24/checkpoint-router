import React, { useState } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import ReactStars from "react-stars";

function Filter({ searchmovies ,setRate }) {
 
  

  return (
    <div>
      <div>
        <Navbar className="bg-light justify-content-between">
          <Form inline>
            <FormControl
              type="text"
              onChange={(e) => searchmovies(e.target.value)}
              placeholder="Search Movie"
              className=" mr-sm-2"
            />
            <br />
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              half={false}
              onChange={(e) => setRate(e)}
            />
            {/* <Button
              type="submit"
              onClick={() => {
                searchmovies({
                  title: title,
                  rate: rate,
                });
              }}
            >
              Search
            </Button> */}
          </Form>
        </Navbar>
      </div>
    </div>
  );
}

export default Filter;
