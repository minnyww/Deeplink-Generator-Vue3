// import { defineComponent } from '@vue/composition-api';

import { defineComponent, reactive, ref } from 'vue';
import useBoolean from '../hooks/useBoolean';

export default defineComponent({
   setup() {
      // const count = ref(0);
      const deeplinkData = reactive([]);
      const { value: openModal, toggle } = useBoolean();
      const urlName = ref('');
      const urlLink = ref('');

      const addLink = () => {
         deeplinkData.push({ url: urlLink.value, name: urlName.value });
         urlName.value = '';
         urlLink.value = '';
      };

      // console.log('parse json', JSON.parse(JSON.stringify(deeplinkData)));

      return {
         openModal,
         toggle,
         addLink,
         urlName,
         urlLink,
         deeplinkData,
      };
   },

   render() {
      return (
         <div>
            <h2>Deeplink Generator</h2>
            <a-input
               id='search-box'
               placeholder='Search'
               style={{ width: '70%', marginRight: '1.5rem' }}
            />
            <a-button type='primary' onClick={this.toggle}>
               Add
            </a-button>

            <a-list
               itemLayout='horizontal'
               dataSource={this.deeplinkData}
               renderItem={({ item, index }) => {
                  return (
                     <a-list-item key={index}>
                        <div
                           style={{
                              backgroundColor: '#87db87',
                              width: '5px',
                              height: '35px',
                           }}
                        ></div>
                        <a-list-item-meta
                           title={item.name}
                           description={item.url}
                           avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                        ></a-list-item-meta>
                     </a-list-item>
                  );
               }}
            ></a-list>

            <a-modal
               title='Add Link'
               visible={this.openModal}
               onOk={this.addLink}
               onCancel={this.toggle}
               okText='Add Link'
               // v-model:visible="visible" title="Basic Modal" @ok="handleOk"
            >
               <a-input
                  placeholder='Enter Name'
                  value={this.urlName}
                  onChange={(e) => (this.urlName = e.target.value)}
               />
               <br />
               <br />
               <a-input
                  placeholder='Enter URL like : https://gooogle.co.th'
                  value={this.urlLink}
                  onChange={(e) => (this.urlLink = e.target.value)}
               />
            </a-modal>
         </div>
      );
   },
});
