import React from "react";
import "./Blog..css";
import { Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="blog-line"></div>
        <div className="main-blog container">
          <div className="content">
            <h3>Table of Contents</h3>
            <b>
              <p>Difference between Node.JS and Javascript</p>

              <p>When should we use node.js and mongodb?</p>
              <p>What is the purpose of JWT token and how does it work?</p>
              <p>Difference between SQL and NoSQL database</p>
            </b>
          </div>
          <div className="blog ">
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>Difference between Node.JS and Javascript</h3>
                </Card.Title>

                <Card.Text>
                  NodeJS is a Javascript runtime environment that allows the
                  javascript to be run on the server-side. Javascript is a
                  Scripting language it also a high-level programming language.
                  Javascript can only be run in the browsers.Nodejs allows
                  Javascript code to run outside the browser. It is basically
                  used on the client-side.It is mostly used on the server-side.
                  JS have capability to add HTML tags. Nodejs does not have
                  capability to add HTML tags. Javascript can run in any browser
                  engine. Javascript is used in frontend development and node.js
                  is used in backend development.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Title>
                  {" "}
                  <h3>When should we use node.js and mongodb?</h3>{" "}
                </Card.Title>
                <p>
                  MongoDB and NodeJS are two different technologies.These two
                  technologies are for different parts of web server system. We
                  don't substitute one for the other.
                </p>
                <Card.Subtitle className="mb-2 text-muted">
                  When should we use Nodejs?
                </Card.Subtitle>
                <Card.Text>
                  When should we use Nodejs? NodeJS is a Javascript runtime
                  environment. It's actually helps JavaScript to run outside of
                  server.NodeJS helps us to to connect our client site to
                  database by it's server site.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  When should we use MongoDB?
                </Card.Subtitle>
                <Card.Text>
                  IF our application needs to storage data that can effortlessly
                  edit or update it late, then we need database. there are so
                  many popular databases. MongoDB one of them. MongoDB is a
                  No-SQL database for storing data.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Title>
                  <h3>
                    What is the purpose of JWT token and how does it work?
                  </h3>
                </Card.Title>
                <Card.Text>
                  JSON Web Token is an open standard used to share information
                  between two parties securely — a client and a server. It is
                  compared to readable using a private key/ or a public key pair
                  by the Identity Provider. When someone login a website at that
                  time JWT creates a secret key by user information like email
                  and number for future use. When the user will log in in the
                  future that time JWT compares user information and token if
                  the token is a match with the user and show all data on the
                  user dashboard which he saved on his account.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Title>
                  <h3>Difference between SQL and NoSQL database</h3>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      SQL databases are relational, NoSQL databases are
                      non-relational.
                    </li>
                    <li>
                      SQL databases have fixed, NoSQL databases have dynamic.
                    </li>
                    <li>
                      SQL databases are vertically scalable, NoSQL databases are
                      horizontally scalable.
                    </li>
                    <li>
                      SQL databases are table-based, NoSQL databases are
                      document, key-value, etc stores.
                    </li>
                    <li>
                      {" "}
                      SQL databases are best suited for complex queries, NoSQL
                      databases are not best suited for complex queries
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
