const CenterContext = ({ data, number }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h4 className="sub-service-count">
            {number < 10 ? `0${number}` : number}
          </h4>
          <div className="subServiceTitle">
            <h3 className="sub-service-head">{data.name}</h3>
          </div>
          <div className="subServiceBody">
            <p>{data.details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterContext;
