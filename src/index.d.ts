interface IDetaultTheme {
  primaryColor: string;
}

interface IGatsbySharImageQueryResult {
  childImageSharp: {
    fluid: {
      src: string;
      srcSet: string;
      width: number;
      height: number;
      base64: string;
      aspectRatio: number;
      sizes: string;
    };
    fixed: {
      src: string;
      srcSet: string;
      width: number;
      height: number;
      base64: string;
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
