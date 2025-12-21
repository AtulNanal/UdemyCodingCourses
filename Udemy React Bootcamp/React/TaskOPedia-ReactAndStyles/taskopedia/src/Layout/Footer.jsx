//Example of Named Export of a Function

//In Style outer curly brace indicates that the content inside is a Javascript content and not html
//The inner curly brace indicates that the content inside is a Style Object
export function Footer() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          backgroundColor: "lightgray",
          padding: "10px",
          color: "cyan",
        }}
      >
        Made with Love by DotNetMastery
      </p>
    </div>
  );
}

//Another way of doing Named Export of a Function
//export { Footer };

//export default Footer;
