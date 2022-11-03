const contact = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - Contact';
  res.render('contact', {title: pageTitle, selected_contact: true});
};

module.exports = {
  contact
}