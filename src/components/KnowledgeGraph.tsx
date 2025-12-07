import { useRef, useEffect, useState, useCallback } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: number;
  radius: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  value: number;
}

const KnowledgeGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isHovered, setIsHovered] = useState(false);

  // Skills Data
  const data = useRef<{ nodes: Node[]; links: Link[] }>({
    nodes: [
      // Frontend (Group 1)
      { id: "Frontend", group: 1, radius: 35 },
      { id: "React", group: 1, radius: 25 },
      { id: "TypeScript", group: 1, radius: 25 },
      { id: "Tailwind", group: 1, radius: 20 },
      { id: "Chakra UI", group: 1, radius: 20 },
      { id: "HTML", group: 1, radius: 20 },
      { id: "Javascript", group: 1, radius: 25 },
      { id: "Next.js", group: 1, radius: 45 },
      { id: "CSS", group: 1, radius: 20 },
      { id: "Figma", group: 1, radius: 10 },
      { id: "CMS", group: 1, radius: 20 },
      
      // Backend (Group 2)
      { id: "Backend", group: 2, radius: 35 },
      { id: "Node.js", group: 2, radius: 25 },
      { id: "PostgreSQL", group: 2, radius: 25 },
      { id: "MongoDB", group: 2, radius: 20 },
      { id: "Supabase", group: 2, radius: 20 },
      { id: "ORM", group: 2, radius: 20 },
      { id: "GraphQL", group: 2, radius: 20 },
      { id: "REST API", group: 2, radius: 20 },
      { id: "Python", group: 2, radius: 15 },
      { id: "Docker", group: 2, radius: 20 },
      { id: "Git", group: 2, radius: 25 },
      
      // Web3 (Group 3)
      { id: "Blockchain", group: 3, radius: 35 },
      { id: "Solidity", group: 3, radius: 25 },
      { id: "Ethers.js", group: 3, radius: 20 },
      { id: "Hardhat", group: 3, radius: 20 },
      { id: "DeFi", group: 3, radius: 25 },
      
      // Connecting Nodes
      { id: "Web Development", group: 0, radius: 45 },
    ],
    links: [
      // Core
      { source: "Web Development", target: "Frontend", value: 10 },
      { source: "Web Development", target: "Backend", value: 10 },
      { source: "Web Development", target: "Blockchain", value: 10 },

      // Frontend
      { source: "Frontend", target: "React", value: 3 },
      { source: "Frontend", target: "TypeScript", value: 3 },
      { source: "Frontend", target: "Tailwind", value: 3 },
      { source: "Frontend", target: "Chakra UI", value: 3 },
      { source: "Frontend", target: "HTML", value: 3 },
      { source: "Frontend", target: "Javascript", value: 3 },
      { source: "Frontend", target: "Next.js", value: 3 },
      { source: "Frontend", target: "CSS", value: 3 },
      { source: "Frontend", target: "Figma", value: 3 },
      { source: "Frontend", target: "CMS", value: 3 },

      // Backend
      { source: "Backend", target: "Node.js", value: 3 },
      { source: "Backend", target: "PostgreSQL", value: 3 },
      { source: "Backend", target: "MongoDB", value: 3 },
      { source: "Backend", target: "Supabase", value: 3 },
      { source: "Backend", target: "ORM", value: 3 },
      { source: "Backend", target: "REST API", value: 3 },
      { source: "Backend", target: "GraphQL", value: 3 },
      { source: "Backend", target: "Python", value: 3 },
      { source: "Backend", target: "Docker", value: 3 },
      { source: "Backend", target: "Git", value: 3 },

      // Blockchain
      { source: "Blockchain", target: "Solidity", value: 3 },
      { source: "Blockchain", target: "Ethers.js", value: 3 },
      { source: "Blockchain", target: "Hardhat", value: 3 },
      { source: "Blockchain", target: "DeFi", value: 3 }
    ]
  }).current;

  // Handle Resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 600
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize D3 Simulation
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const width = dimensions.width;
    const height = dimensions.height;

    // Simulation Setup
    const simulation = d3.forceSimulation<Node>(data.nodes)
      .force("link", d3.forceLink<Node, Link>(data.links).id(d => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(d => (d as Node).radius + 10));

    // Colors
    const colorScale = d3.scaleOrdinal<string>()
      .domain(["0", "1", "2", "3"])
      .range(["#ffffff", "#3b82f6", "#10b981", "#8b5cf6"]); // White, Blue, Green, Purple

    // Links
    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(data.links)
      .enter().append("line")
      .attr("stroke", "#ffffff")
      .attr("stroke-opacity", 0.2)
      .attr("stroke-width", d => Math.sqrt(d.value));

    // Nodes Group
    const nodeGroup = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(data.nodes)
      .enter().append("g")
      .call(d3.drag<SVGGElement, Node>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Node Circles
    nodeGroup.append("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => `url(#grad-${d.group})`)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.8)
      .style("cursor", "pointer");

    // Gradients for stylish look
    const defs = svg.append("defs");
    
    // Create gradients for each group
    const gradients = [
      { id: 0, color: "#ffffff", end: "#a1a1aa" },
      { id: 1, color: "#60a5fa", end: "#2563eb" }, // Blue
      { id: 2, color: "#34d399", end: "#059669" }, // Emerald 
      { id: 3, color: "#a78bfa", end: "#7c3aed" }  // Violet
    ];

    gradients.forEach(g => {
      const gradient = defs.append("radialGradient")
        .attr("id", `grad-${g.id}`)
        .attr("cx", "30%")
        .attr("cy", "30%")
        .attr("r", "70%");
      
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", g.color)
        .attr("stop-opacity", 0.8);

      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", g.end)
        .attr("stop-opacity", 0.6);
    });

    // Node Labels
    nodeGroup.append("text")
      .text(d => d.id)
      .attr("x", 0)
      .attr("y", d => d.radius + 15)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", "12px")
      .attr("font-weight", "500")
      .style("pointer-events", "none")
      .style("text-shadow", "0 2px 4px rgba(0,0,0,0.5)");

    // Simulation Tick
    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x = Math.max((d.source as Node).radius, Math.min(width - (d.source as Node).radius, (d.source as Node).x!)))
        .attr("y1", d => (d.source as Node).y = Math.max((d.source as Node).radius, Math.min(height - (d.source as Node).radius - 20, (d.source as Node).y!)))
        .attr("x2", d => (d.target as Node).x = Math.max((d.target as Node).radius, Math.min(width - (d.target as Node).radius, (d.target as Node).x!)))
        .attr("y2", d => (d.target as Node).y = Math.max((d.target as Node).radius, Math.min(height - (d.target as Node).radius - 20, (d.target as Node).y!)));

      nodeGroup
        .attr("transform", d => {
          d.x = Math.max(d.radius, Math.min(width - d.radius, d.x!));
          d.y = Math.max(d.radius, Math.min(height - d.radius - 20, d.y!));
          return `translate(${d.x},${d.y})`;
        });
    });

    // Drag Functions
    function dragstarted(event: d3.D3DragEvent<SVGGElement, Node, Node>, d: Node) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      setIsHovered(true);
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, Node, Node>, d: Node) {
      d.fx = Math.max(d.radius, Math.min(width - d.radius, event.x));
      d.fy = Math.max(d.radius, Math.min(height - d.radius - 20, event.y));
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, Node, Node>, d: Node) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      setIsHovered(false);
    }

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [dimensions]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-[600px] bg-gradient-to-b from-transparent to-black/20 rounded-xl overflow-hidden border border-white/10 relative transition-colors duration-500 ${isHovered ? 'border-primary/30' : ''}`}
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
      </div>
      <svg ref={svgRef} width="100%" height="100%" className="touch-none"></svg>
    </div>
  );
};

export default KnowledgeGraph;
