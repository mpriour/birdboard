<script>
import axios from 'axios'
export default {
  props:{
    url: {type: String, default: ''},
    params: {type: Object, default: null},
    headers: {type: Object, default: null},
    method: {type: String, default: 'get'},
  },
  data(){
    return {
      response: null
    }
  },
  methods:{
    async request(cfg={}){
      try {
        const response = await axios(cfg.url || this.url,{
          method: cfg.method || this.method,
          params: cfg.params || this.params,
          headers: cfg.headers || this.headers
        })
        this.response = response
        this.$emit('data', response.data)
        return response
      }
      catch (error) {
        this.$emit('error', error)
        return error
      }
    },
    get(cfg={}){
      cfg.method = 'get'
      return this.request(cfg)
    },
    post(cfg={}){
      cfg.method = 'post'
      return this.request(cfg)
    }
  },
  created(){
    if(this.url){
      this.request()
    }
  },
  render(){
    return this.$scopedSlots.default({
      response: this.response,
      request: this.request,
      get: this.get,
      post: this.post
    })
  },
}
</script>
