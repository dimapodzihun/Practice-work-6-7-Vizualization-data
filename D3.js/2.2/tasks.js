// ---------------- Дані ----------------
    const nodes = [
      { id: 1, name: "Олег",  group: "Розробники" },
      { id: 2, name: "Анна",  group: "Дизайнери" },
      { id: 3, name: "Петро", group: "Менеджери" },
      { id: 4, name: "Марія", group: "Розробники" },
      { id: 5, name: "Іван",  group: "Дизайнери" }
    ];

    const links = [
      { source: 1, target: 2, type: "Співпраця" },
      { source: 1, target: 4, type: "Команда" },
      { source: 2, target: 3, type: "Проект" },
      { source: 2, target: 5, type: "Команда" },
      { source: 3, target: 4, type: "Проект" }
    ];

    const svg = d3.select("#graph");
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    // Кольори для різних груп
    const color = d3.scaleOrdinal()
      .domain(["Розробники", "Дизайнери", "Менеджери"])
      .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

    // ---------------- Сили (force simulation) ----------------
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links)
        .id(d => d.id)
        .distance(120))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Ребра (лінії)
    const link = svg.append("g")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link");

    // Вузли (кола)
    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 15)
      .attr("fill", d => color(d.group))
      .call(drag(simulation));   // ← перетягування

    // Підписи (імена)
    const labels = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("dy", -20)
      .text(d => d.name);

    // Оновлення позицій при кожному "тік" симуляції
    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      labels
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    });

    // ---------------- Функції для перетягування вузлів ----------------
    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;  // якщо хочеш, щоб вузол після відпускання знову "плавав"
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }