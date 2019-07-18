interface IDetaultTheme {
  primaryColor: string;
}

interface IGastbyImage {
  childImageSharp: {
    fluid: {
      src: string;
    };
  };
}
interface IGastbyQueryData<TFrontmatter> {
  data: {
    markdownRemark: {
      frontmatter: TFrontmatter;
    };
  };
}
