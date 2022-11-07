import React from "react";

const Pagination = ({prev, next, onPrevious, onNext}) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="col-12">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item disabled">
              <a className="page-link" href="#" onClick={handlePrevious}>
                Previous
              </a>
            </li>
          ) : null}
          {/* <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li> */}
          {next ? (
            <li className="page-item">
              <a className="page-link" href="onClick={handleNext}">
                Next
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
