const React = require('react')
const Def = require('../default')

function new_form() {
  return (
    <Def>
      <main>
        <h1> Add a New Places</h1>
        <form method="POST" action="/places">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="name"> Business Name</label>
              <br></br>
              <input
                className="form-control"
                id="name"
                name="name"
                required
              ></input>
            </div>
            <br></br>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="pic">Place Business Picture</label>
              <br></br>
              <input
                className="form-control"
                type="url"
                id="pic"
                name="pic"
              ></input>
            </div>
            <br></br>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="city">City</label>
              <br></br>
              <input className="form-control" id="city" name="city"></input>
            </div>
            <br></br>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="state">State</label>
              <br></br>
              <input className="form-control" id="state" name="state"></input>
            </div>
            <br></br>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="cuisines">Cuisines</label>
              <br></br>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                required
              ></input>
            </div>
            <br></br>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <label for="founded">Founded Year</label>
              <input type ="number" className="form-control" id="founded" name="founded" value={new Date().getFullYear()} />            </div>
          </div>
          <br></br>
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Place"
          ></input>
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form