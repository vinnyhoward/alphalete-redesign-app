Orders
id primary key
total integer
ship_name
bill_name
order_date
status

Line items
ID Product_ID

  // componentDidMount() {
  //   axios.get(`/api/getproduct/${this.props.match.params.id}`).then(res => {
  //     this.setState({
  //       product: res.data
  //     })
  //   })
  // }