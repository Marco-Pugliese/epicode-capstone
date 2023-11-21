import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const SearchHeroSection = () => {
  const [input2, setInput2] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [query2, setQuery2] = useState("");
  const navigate = useNavigate();
  return (
    <div id="searchContainer" className="position-relative">
      <div
        id="SearchHeroSection"
        className="position-relative translate-middle start-50 p-5 rounded-5 shadow-lg"
      >
        <Form
          className="formSearch2 rounded-5"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery2(input2);
            navigate(`/search/${input2}`);
          }}
        >
          <InputGroup className="my-auto">
            <Form.Control
              className="bg-transparent searchInputField border-0 "
              value={input2}
              onChange={(e) => {
                setInput2(e.target.value);
              }}
              placeholder="Cerca nella tua zona..."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="bg-transparent border-0 border-start rounded-end-5"
            >
              <Search className="searchIcon" />
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};
export default SearchHeroSection;
