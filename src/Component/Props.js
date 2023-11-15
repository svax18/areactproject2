import logo from "../Img/Nr3.jpg";
function service(props) {
  return (
    <>
      <h2>{props.Title}</h2>
      <img src={logo} alt="servicesOne" className="SeImg" />
      <p>{props.Information}</p>
    </>
  );
}
export default service;
