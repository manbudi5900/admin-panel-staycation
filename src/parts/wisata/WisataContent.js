import React from "react";
import Button from "../../elements/Button";

export default function WisataContent() {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Tabel Wisata</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Wisata</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tabel Wisata</h5>
            <form
              id="searchForm"
              method="GET"
              className="form-line"
              style={{ width: "100%" }}
            >
              <div className="row">
                <input
                  type="hidden"
                  name="download"
                  id="downloadVal"
                  value="0"
                />
                <input type="hidden" name="role" value="all" />
                <div className="form-group col-lg-3">
                  <input
                    type="text"
                    name="user"
                    className="form-control form-control-sm "
                    id="user"
                    placeholder="Username/Email/Phone"
                    value=""
                  />
                </div>
                <div className="form-group col-lg-3">
                  <select
                    name="status"
                    className="form-control form-control-sm "
                  >
                    <option value="">-- Status --</option>
                    <option value="1">Aktif</option>
                    <option value="0">Konfirmasi Email</option>
                    <option value="-1">Suspend</option>
                  </select>
                </div>
                <div className="form-group col-lg-3">
                  <input
                    className="form-control form-control-sm"
                    type="date"
                    name="startdate"
                    value=""
                    placeholder="Start"
                  />
                </div>
                <div className="form-group col-lg-3">
                  <input
                    className="form-control form-control-sm"
                    type="date"
                    name="enddate"
                    value=""
                    placeholder="End"
                  />
                </div>
              </div>
              <div className="text-right">
                <Button
                  className={"btn btn-primary btn-sm mr-sm-1"}
                  type={"button"}
                >
                  <i className="bi bi-search"></i>
                  &nbsp;Search
                </Button>

                <a
                  onclick="downloads()"
                  className="btn btn-info btn-sm"
                  href="#"
                >
                  <i className="bi bi-download"></i>
                  &nbsp;Download
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tabel User</h5>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">No Hp</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Brandon Jacob</td>
                  <td>manbudi590@gmail.com</td>
                  <td>0818217218</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <Button
                      className={"btn btn-info btn-sm mr-sm-1"}
                      type={"button"}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Brandon Jacob</td>
                  <td>manbudi590@gmail.com</td>
                  <td>0818217218</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <Button
                      className={"btn btn-info btn-sm mr-sm-1"}
                      type={"button"}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Brandon Jacob</td>
                  <td>manbudi590@gmail.com</td>
                  <td>0818217218</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <Button
                      className={"btn btn-info btn-sm mr-sm-1"}
                      type={"button"}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Brandon Jacob</td>
                  <td>manbudi590@gmail.com</td>
                  <td>0818217218</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <Button
                      className={"btn btn-info btn-sm mr-sm-1"}
                      type={"button"}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Brandon Jacob</td>
                  <td>manbudi590@gmail.com</td>
                  <td>0818217218</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <Button
                      className={"btn btn-info btn-sm mr-sm-1"}
                      type={"button"}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-md-6">
                Total Data : <b>4382</b>
              </div>
              <div className="col-md-6">
                <span className="float-right">
                  <nav>
                    <ul className="pagination">
                      <li
                        className="page-item disabled"
                        aria-disabled="true"
                        aria-label="« Previous"
                      >
                        {" "}
                        <span className="page-link" aria-hidden="true">
                          ‹
                        </span>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=2"
                        >
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=3"
                        >
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=4"
                        >
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=5"
                        >
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=6"
                        >
                          6
                        </a>
                      </li>
                      <li className="page-item disabled" aria-disabled="true">
                        <span className="page-link">...</span>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=292"
                        >
                          292
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=293"
                        >
                          293
                        </a>
                      </li>
                      <li className="page-item">
                        {" "}
                        <a
                          className="page-link"
                          href="https://ntbmall.com/admin/user?page=2"
                          rel="next"
                          aria-label="Next »"
                        >
                          ›
                        </a>
                      </li>
                    </ul>{" "}
                  </nav>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
