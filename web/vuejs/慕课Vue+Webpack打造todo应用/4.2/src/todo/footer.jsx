/*把html写到js里，可使用js语法处理html*/
import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'ahswch'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Writen by {this.author}</span>
      </div>
    )
  }
}