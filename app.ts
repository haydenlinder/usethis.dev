interface Tool {
    name: string;
    description: string;
    categories: string[];
    url: string;
}

const tools: Tool[] = [
    // Web Design
    { name: "Figma", description: "Collaborative interface design tool", categories: ["web design", "ui design", "interface design", "prototyping", "design"], url: "https://figma.com" },
    { name: "Canva", description: "Graphic design and visual content creation", categories: ["web design", "graphic design", "design", "marketing"], url: "https://canva.com" },
    { name: "Webflow", description: "Visual web development platform", categories: ["web design", "web development", "no code", "design"], url: "https://webflow.com" },
    { name: "Adobe XD", description: "UI/UX design and prototyping tool", categories: ["web design", "ui design", "ux design", "prototyping", "design"], url: "https://adobe.com/products/xd.html" },
    { name: "Sketch", description: "Digital design toolkit for Mac", categories: ["web design", "ui design", "design"], url: "https://sketch.com" },
    
    // Industrial Design
    { name: "FreeCAD", description: "Open-source parametric 3D modeler", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://freecadweb.org" },
    { name: "Fusion 360", description: "Cloud-based 3D CAD/CAM/CAE tool", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://autodesk.com/products/fusion-360" },
    { name: "SolidWorks", description: "Professional 3D CAD design software", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://solidworks.com" },
    { name: "Rhino", description: "3D modeling software for design", categories: ["industrial design", "3d modeling", "design"], url: "https://rhino3d.com" },
    
    // Task Management
    { name: "Linear", description: "Issue tracking for software teams", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://linear.app" },
    { name: "Asana", description: "Work management and team collaboration", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://asana.com" },
    { name: "Trello", description: "Visual project management tool", categories: ["task management", "project management", "productivity", "kanban"], url: "https://trello.com" },
    { name: "Notion", description: "All-in-one workspace for notes and tasks", categories: ["task management", "note taking", "productivity", "collaboration", "documentation"], url: "https://notion.so" },
    { name: "ClickUp", description: "All-in-one productivity platform", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://clickup.com" },
    { name: "Monday.com", description: "Work operating system", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://monday.com" },
    
    // Development
    { name: "VS Code", description: "Code editor with rich extension ecosystem", categories: ["development", "coding", "programming", "ide"], url: "https://code.visualstudio.com" },
    { name: "GitHub", description: "Code hosting and collaboration platform", categories: ["development", "coding", "version control", "collaboration"], url: "https://github.com" },
    { name: "GitLab", description: "DevOps platform with Git repository", categories: ["development", "coding", "version control", "devops"], url: "https://gitlab.com" },
    { name: "Vercel", description: "Platform for frontend deployment", categories: ["development", "deployment", "hosting", "web development"], url: "https://vercel.com" },
    
    // Communication
    { name: "Slack", description: "Team communication and collaboration", categories: ["communication", "collaboration", "messaging", "productivity"], url: "https://slack.com" },
    { name: "Discord", description: "Voice, video, and text communication", categories: ["communication", "collaboration", "messaging"], url: "https://discord.com" },
    { name: "Zoom", description: "Video conferencing platform", categories: ["communication", "video conferencing", "meetings"], url: "https://zoom.us" },
    
    // Note Taking
    { name: "Obsidian", description: "Knowledge base with markdown support", categories: ["note taking", "knowledge management", "productivity", "writing"], url: "https://obsidian.md" },
    { name: "Evernote", description: "Note-taking and organization app", categories: ["note taking", "productivity", "organization"], url: "https://evernote.com" },
    { name: "Apple Notes", description: "Native note-taking app for Apple devices", categories: ["note taking", "productivity"], url: "https://apple.com/notes" },
    
    // Analytics
    { name: "Google Analytics", description: "Web analytics service", categories: ["analytics", "web analytics", "marketing", "data"], url: "https://analytics.google.com" },
    { name: "Mixpanel", description: "Product analytics platform", categories: ["analytics", "product analytics", "data"], url: "https://mixpanel.com" },
    { name: "Amplitude", description: "Digital analytics platform", categories: ["analytics", "product analytics", "data"], url: "https://amplitude.com" },
    
    // Video Editing
    { name: "Final Cut Pro", description: "Professional video editing software", categories: ["video editing", "media production", "content creation"], url: "https://apple.com/final-cut-pro" },
    { name: "Adobe Premiere Pro", description: "Industry-standard video editing", categories: ["video editing", "media production", "content creation"], url: "https://adobe.com/products/premiere.html" },
    { name: "DaVinci Resolve", description: "Professional video editing and color grading", categories: ["video editing", "media production", "content creation", "color grading"], url: "https://blackmagicdesign.com/products/davinciresolve" },
    
    // Photo Editing
    { name: "Adobe Photoshop", description: "Professional image editing software", categories: ["photo editing", "graphic design", "image editing", "design"], url: "https://adobe.com/products/photoshop.html" },
    { name: "Lightroom", description: "Photo editing and organization", categories: ["photo editing", "photography", "image editing"], url: "https://adobe.com/products/photoshop-lightroom.html" },
    { name: "GIMP", description: "Free and open-source image editor", categories: ["photo editing", "graphic design", "image editing"], url: "https://gimp.org" },
    
    // Marketing
    { name: "Mailchimp", description: "Email marketing platform", categories: ["marketing", "email marketing", "automation"], url: "https://mailchimp.com" },
    { name: "HubSpot", description: "Inbound marketing and sales platform", categories: ["marketing", "crm", "sales", "automation"], url: "https://hubspot.com" },
    { name: "Hootsuite", description: "Social media management platform", categories: ["marketing", "social media", "content management"], url: "https://hootsuite.com" },
];

function searchTools(query: string): Tool[] {
    const normalizedQuery = query.toLowerCase().trim();
    
    if (normalizedQuery === "") {
        return [];
    }
    
    const queryWords = normalizedQuery.split(/\s+/);
    
    const scoredTools = tools.map(tool => {
        let score = 0;
        
        // Check each category for matches
        for (const category of tool.categories) {
            // Exact category match
            if (category === normalizedQuery) {
                score += 100;
            }
            
            // Category contains the full query
            if (category.includes(normalizedQuery)) {
                score += 50;
            }
            
            // Check individual words
            for (const word of queryWords) {
                if (word.length > 2 && category.includes(word)) {
                    score += 10;
                }
            }
        }
        
        // Check tool name
        const normalizedName = tool.name.toLowerCase();
        if (normalizedName.includes(normalizedQuery)) {
            score += 30;
        }
        
        // Check description
        const normalizedDescription = tool.description.toLowerCase();
        if (normalizedDescription.includes(normalizedQuery)) {
            score += 20;
        }
        
        return { tool, score };
    });
    
    // Filter and sort by score
    return scoredTools
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.tool)
        .slice(0, 10); // Limit to top 10 results
}

function renderResults(results: Tool[]): void {
    const resultsContainer = document.getElementById("resultsContainer") as HTMLDivElement;
    const resultsDiv = document.getElementById("results") as HTMLDivElement;
    const emptyState = document.getElementById("emptyState") as HTMLDivElement;
    
    if (results.length === 0) {
        resultsContainer.classList.add("hidden");
        emptyState.classList.remove("hidden");
        return;
    }
    
    resultsContainer.classList.remove("hidden");
    emptyState.classList.add("hidden");
    
    resultsDiv.innerHTML = results.map(tool => `
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" 
           class="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-indigo-200">
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${tool.name}</h3>
                    <p class="text-gray-600 mb-3">${tool.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${tool.categories.slice(0, 3).map(cat => 
                            `<span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">${cat}</span>`
                        ).join('')}
                    </div>
                </div>
                <svg class="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </div>
        </a>
    `).join('');
}

function initializeSearch(): void {
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    
    let debounceTimer: number;
    
    searchInput.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
        const query = target.value;
        
        clearTimeout(debounceTimer);
        
        debounceTimer = window.setTimeout(() => {
            const results = searchTools(query);
            renderResults(results);
        }, 150);
    });
    
    // Focus on search input on page load
    searchInput.focus();
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSearch);
} else {
    initializeSearch();
}
