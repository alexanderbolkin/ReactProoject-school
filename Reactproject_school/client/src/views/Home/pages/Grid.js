import React, {Component} from 'react';

class GridPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">

        <h2 className="fw-200 pb-3 pt-3 mb-3">Deleted Users</h2>
        <div className="row">
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-01">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">User Items</h3>
                  <p className="col-lg-12 mb-3 mt-5">While Bootstrap uses <code className="highlighter-rouge">em</code>s or <code className="highlighter-rouge">rem</code>s for defining most
                    sizes,
                    <code className="highlighter-rouge">px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in
                    pixels and does not change with the <a href="https://drafts.csswg.org/mediaqueries-3/#units">font size</a>.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2 mb-3">
                    <table className="table table-bordered table-striped mb-5">
                      <thead>
                      <tr>
                        <th className="text-left">No</th>
                        <th className="text-left">firstName</th>
                        <th className="text-left">lastName</th>
                        <th className="text-left">username</th>
                        <th className="text-left">email</th>
                        <th className="text-left">deleted_date</th>
                      </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>None (auto)</td>
                          <td>540px</td>
                          <td>720px</td>
                          <td>960px</td>
                          <td>1140px</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>anton</td>
                          <td>pedroba</td>
                          <td>akmlonol</td>
                          <td>ant@gmail.com</td>
                          <td>01/09/2018</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>anton</td>
                          <td>pedroba</td>
                          <td>akmlonol</td>
                          <td>ant@gmail.com</td>
                          <td>01/09/2018</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </section>
          </div>
          
            <section className="widget shadow-01" id="widget-05">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Equal-width multi-row</h3>
                  <p>Create equal-width columns that span multiple rows by inserting a <code className="highlighter-rouge">.w-100</code> where you want the
                    columns to break to a new line. Make the breaks responsive by mixing the <code className="highlighter-rouge">.w-100</code> with some <a
                      href="/docs/4.0/utilities/display/">responsive display utilities</a>.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">col</div>
                            <div className="col">col</div>
                            <div className="w-100"/>
                            <div className="col">col</div>
                            <div className="col">col</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
  }
}

export default GridPage;
