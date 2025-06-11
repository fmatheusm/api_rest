class HomeController {
  index(req, res) {
    res.json({
      hi: 'Hello world!!!'
    });
  }
}

export default new HomeController();
