<template>
  <div class="home">
      

    <div
      v-if="!cordova"
      class="alert"
    >
      There might be an error with your installation. Check that <strong>Vue.cordova</strong> is available
    </div>

    <div
      v-if="cordova && !cordova.deviceready"
      class="alert"
    >
      The `deviceready` event has not been triggered.
      <br />
      Check the <a href="https://github.com/kartsims/vue-cordova#troubleshooting">Troubleshooting section</a> of vue-cordova's README.
    </div>

    <div class="indicators">
      <div :class="{ ok: cordova.deviceready }">
        <span></span>deviceready
      </div>
      <div
        v-for="(pluginTest, plugin) in plugins"
        :class="{ ok: pluginEnabled(plugin) }"
        @click="pluginTest"
        :key="plugin.id"
      >
        <span></span>{{ plugin }}
      </div>
      <p>
        Click a plugin name to run a simple test
      </p>
    </div>

    <h2>`Vue.cordova`</h2>

    <div
      class="dump"
      v-if="cordova"
    >{{ cordova }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
export default {
  name: "home",
  data: () => {
    return {
      cordova: Vue.cordova,
      plugins: {
        "cordova-plugin-camera": function() {
          if (!Vue.cordova.camera) {
            window.alert("Vue.cordova.camera not found !");
            return;
          }
          Vue.cordova.camera.getPicture(
            (imageURI) => {
              window.alert("Photo URI : " + imageURI);
            },
            (message) => {
              window.alert("FAILED : " + message);
            },
            {
              quality: 50,
              destinationType: Vue.cordova.camera.DestinationType.FILE_URI,
            }
          );
        },
        "cordova-plugin-device": function() {
          if (!Vue.cordova.device) {
            window.alert("FAILED : device information not found");
          } else {
            window.alert(
              "Device : " +
                Vue.cordova.device.manufacturer +
                " " +
                Vue.cordova.device.platform +
                " " +
                Vue.cordova.device.version
            );
          }
        },
        "cordova-plugin-geolocation": function() {
          if (!Vue.cordova.geolocation) {
            window.alert("Vue.cordova.geolocation not found !");
            return;
          }
          Vue.cordova.geolocation.getCurrentPosition(
            (position) => {
              window.alert(
                "Current position : " +
                  position.coords.latitude +
                  "," +
                  position.coords.longitude
              );
            },
            (error) => {
              window.alert("FAILED Error #" + error.code + " " + error.message);
            },
            {
              timeout: 1000,
              enableHighAccuracy: true,
            }
          );
        },
        "cordova-plugin-contacts": function() {
          if (!Vue.cordova.contacts) {
            window.alert("Vue.cordova.contacts not found !");
            return;
          }
          const ContactFindOptions = ContactFindOptions || function() {};
          Vue.cordova.contacts.find(
            ["displayName"],
            (contacts) => {
              window.alert("Contacts found : " + contacts.length);
            },
            (error) => {
              window.alert("FAILED : " + error.code);
            }
          );
        },
      },
    };
  },
  components: {
    
  },
  methods: {
    pluginEnabled: function(pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1;
    },
  },
};
</script>
