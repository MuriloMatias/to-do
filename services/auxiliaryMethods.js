const handleError = (error, res) => {
    console.log(error);
    return res.status(500).json({ error: error.message });
  };



module.exports = {
    handleError,

}