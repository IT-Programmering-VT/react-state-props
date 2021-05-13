const NameTag = (props) => {
  // all arguments comes inside a argument called props
  // and we named the prop name so we can use that
  return <h3 className="name">{props.name}</h3>;
};

export default NameTag;

/*
If you want to render this in app it would look like this

<NameTag name="Helena" />
<NameTag name="Anna" />
<NameTag name="Janne" />
*/
