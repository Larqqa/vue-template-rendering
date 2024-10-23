export default [
  '<hello>slot test</hello>',
  `
  <div>
    <Hello some-prop="prop testing yee haw">
      <template #default="{passthrough}">
        <p>this is slot with slot prop: {{ passthrough }}</p>
      </template>
    </Hello>
    <br />
    <br />
    <br />
    <p>this is regular paragraph test</p>
    <hello><p>other hello component!</p></hello>
  </div>`,
]
