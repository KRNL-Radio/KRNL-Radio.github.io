def build_page_with_header_footer(page):
    """Builds a page with the header and footer."""
    with open('header.html') as f:
        header = f.read()
    with open('footer.html') as f:
        footer = f.read()
    return header + page + footer