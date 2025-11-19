        // Дані
        const data = [
            {name: "Олександр", height: 175, weight: 70, gender: "Чоловік"},
            {name: "Марія", height: 165, weight: 55, gender: "Жінка"},
            {name: "Петро", height: 180, weight: 85, gender: "Чоловік"},
            {name: "Анна", height: 160, weight: 50, gender: "Жінка"},
            {name: "Сергій", height: 185, weight: 90, gender: "Чоловік"},
            {name: "Катерина", height: 170, weight: 60, gender: "Жінка"},
            {name: "Дмитро", height: 178, weight: 75, gender: "Чоловік"},
            {name: "Олена", height: 168, weight: 58, gender: "Жінка"}
        ];

        // Розміри
        const margin = {top: 20, right: 30, bottom: 40, left: 40};
        const width = 800 - margin.left - margin.right;
        const height = 600 - margin.top - margin.bottom;

        // SVG
        const svg = d3.select("#scatterplot")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Шкали
        const xScale = d3.scaleLinear()
            .domain(d3.extent(data, d => d.height))
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain(d3.extent(data, d => d.weight))
            .range([height, 0]);

        const colorScale = d3.scaleOrdinal()
            .domain(["Чоловік", "Жінка"])
            .range(["#1f77b4", "#ff7f0e"]);

        // Осі
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .call(d3.axisLeft(yScale));

        // Підписи осей
        svg.append("text")
            .attr("transform", `translate(${width/2}, ${height + 35})`)
            .style("text-anchor", "middle")
            .text("Зріст (см)");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Вага (кг)");

        // Tooltip
        const tooltip = d3.select(".tooltip");

        // Точки
        svg.selectAll(".dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "dot")
            .attr("r", 6)
            .attr("cx", d => xScale(d.height))
            .attr("cy", d => yScale(d.weight))
            .style("fill", d => colorScale(d.gender))
            .on("mouseover", function(event, d) {
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(`<b>${d.name}</b><br/>Зріст: ${d.height} см<br/>Вага: ${d.weight} кг`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                tooltip.transition().duration(500).style("opacity", 0);
            });

















