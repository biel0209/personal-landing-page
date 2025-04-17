<script setup>
</script>

<template>
  <section id="timeline" class="reveal-up container mb-5 d-flex flex-column align-items-start">

    <div class="container text-center mb-5 ">
      <h2 class="title">Timeline</h2>
      <hr class="custom-hr mx-auto">
    </div>
    <div class="row">

      <div class="col">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Desenvolvedor Júnior</h3>
              <p class="timeline-date">Outubro 2023 - Hoje</p>
              <em>Nextios (LWSA) - Remoto</em>
              <ul>
                <li>
                  Aplicação Web para precificação de produtos.
                </li>
                <li>
                  Integração CRM x AWS ACE.
                </li>
                <li>
                  Integração entre sistemas de faturamentos,
                </li>
                <li>
                  Chatbots Web baseados em Generative AI.
                </li>
                <li>
                  Web scraping automatizado com RPA (Robotic Process Automation).
                </li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Analista de Suporte de TI Júnior</h3>
              <p class="timeline-date">Julho 2022 - Outubro 2023</p>
              <em>Nextios (LWSA) - Remoto</em>
              <ul>
                <li>Área de operações com foco em monitoramento de serviços, ambientes em nuvem e gestão
                  de
                  incidentes críticos em produção.
                </li>
                <li>Iniciei e desenvolvi, de forma proativa, uma solução web que automatizou a coleta de dados de
                  incidentes e o envio de alertas, otimizando a comunicação entre times — destaque interno que
                  impulsionou minha transição para a área de desenvolvimento.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Bacharelado em Sistemas de Informação</h3>
              <p class="timeline-date">Abril 2019 - Dezembro 2025</p>
              <em>Universidade Federal de Sergipe</em>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  margin-left: 20px;
  padding-left: 30px;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 15px;
  /* centraliza com os marcadores */
  width: 2px;
  height: 100%;
  background-color: var(--primary-color);
  z-index: 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  top: 5px;
  left: 7px;
  /* centraliza com a linha */
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid var(--primary-color);
  z-index: 1;
}

.timeline-content {
  margin-left: 40px;
}

.timeline-content h3 {
  font-size: 1.2rem;
  margin: 0;
}

.timeline-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}
</style>