<script>
import Fetch from "./Fetch.vue";
const KEY = "50ipobcnmad9";
export default {
  extends: Fetch,
  props: {
    location: { type: String, default: "TX" },
    max: { type: Number, default: 1000 },
    notable: { type: Boolean, default: false }
  },
  data() {
    return {
      obs: []
    };
  },
  methods: {
    async getNotable() {
      const resp = await this.get({
        url: `https://api.ebird.org/v2/data/obs/US-${this.location.toUpperCase()}/recent/notable`,
        params: { back: 30, detail: "full", maxResults: this.max },
        headers: {
          "X-eBirdApiToken": KEY
        }
      })
      this.obs = this.dedupe(resp.data)
      return this.obs
    },
    async getRecent() {
      const resp = await this.get({
        url: `https://api.ebird.org/v2/data/obs/US-${this.location.toUpperCase()}/recent`,
        params: { back: 30, maxResults: this.max },
        headers: {
          "X-eBirdApiToken": KEY
        }
      })
      this.obs = resp.data
      return this.obs
    },
    dedupe(data) {
      const uniqObs = []
      return data.filter(obs => {
        if(uniqObs.includes(obs.obsId)){
          return false
        }
        uniqObs.push(obs.obsId)
        return true
      })
    }
  },
  async created() {
    this.notable ? this.getNotable() : this.getRecent();
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      request: this.request,
      get: this.get,
      post: this.post,
      getNotable: this.getNotable,
      getRecent: this.getRecent,
      obs: this.obs
    });
  }
};
</script>
