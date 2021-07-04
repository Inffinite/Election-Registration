<template>
  <div class="positions">
      <!-- <div class="pr-menu">
          <div class="pr-close">
            <svg class="p-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            close
          </div>
          <div class="pm-item">
            <svg class="p-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            
          </div>
      </div> -->
      <div class="p-header">
        <!-- <svg class="p-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/></svg> -->
        Bifa Elections
      </div>
      <div class="p-content">
        <div v-for="(slot, i) in slots" :key="i" class="pos">
            <div class="p-icon">
                <svg class="p-ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
            </div>
            <div class="p-title">
                {{ slot.name }}
                <div class="pos-wr">
                    <div class="p-subtitle">
                        <svg class="p-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
                        {{ slot.candidates }}
                    </div>
                    <div v-if="slot.voted == true" class="p-voted">
                        voted
                    </div>
                    <div v-if="slot.voted == false" class="p-not-voted">
                        not-voted
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            slots: [
                {
                    name: 'Chairperson',
                    candidates: 4,
                    voted: false
                },
                {
                    name: 'Asst. Chairperson',
                    candidates: 4,
                    voted: true
                },
                {
                    name: 'Organizing Secretary',
                    candidates: 4,
                    voted: false
                },
                {
                    name: 'Asst. Organizing Secretary',
                    candidates: 4,
                    voted: false
                },
                {
                    name: 'Secretary General',
                    candidates: 4,
                    voted: true
                },
                {
                    name: 'Asst. Secretary General',
                    candidates: 4,
                    voted: false
                },
                {
                    name: 'Treasurer',
                    candidates: 4,
                    voted: false
                },
            ]
        }
    }
}
</script>

<style>
@import '../styles/positions.css';
</style>