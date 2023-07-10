const setPageTittle = title => {
  const defaultTitle = "هیئت تنیس استان آذربایجان شرقی";
  const pageTitle = title ? `${title} - ${defaultTitle}`: defaultTitle;
  document.title = pageTitle;
}

export { setPageTittle }