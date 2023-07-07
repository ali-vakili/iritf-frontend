const setPageTittle = title => {
  const defaultTitle = "فدراسیون تنیس جمهوری اسلامی ایران";
  const pageTitle = title ? `${title} - ${defaultTitle}`: defaultTitle;
  document.title = pageTitle;
}

export { setPageTittle }