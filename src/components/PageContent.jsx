

function PageContent({ title, children }) {
  return (
    <div className="content outlet-children">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
