import React, { Fragment, useEffect, useRef } from 'react';
import cytoscape from 'cytoscape'
import dagre from 'cytoscape-dagre';
import expandCollapse from 'cytoscape-expand-collapse';

const GraphTest = ({ nodes, edges }) => {

    cytoscape.use(dagre);
    cytoscape.use(expandCollapse);
    const graphRef = useRef(null)

    const drawGraph = () => {
        const cy = cytoscape({
            container: graphRef.current,
            boxSelectionEnabled: false,
            autounselectify: true,

            layout: {
                name: "dagre"
            },
            style: [
                {
                    selector: "node",
                    style: {
                        content: "data(name)",
                        "text-opacity": 0.5,
                        "text-valign": "center",
                        "text-halign": "right",
                        'background-color': '#ad1a66'
                    }
                },
                {
                    selector: ':parent',
                    style: {
                        'background-opacity': 0.333
                    }
                },
                {
                    selector: "edge",
                    style: {
                        "curve-style": "bezier",
                        width: 4,
                        "target-arrow-shape": "triangle",
                        'line-color': '#ad1a66',
                        "target-arrow-color": "#9dbaea"
                    }
                },
                {
                    selector: 'edge.meta',
                    style: {
                        'width': 2,
                        'line-color': 'red'
                    }
                },
                {
                    selector: ':selected',
                    style: {
                        'overlay-color': "#6c757d",
                        'overlay-opacity': 0.3,
                        'background-color': "#999999"
                    }
                }

            ],
            elements: {
                nodes: nodes,
                edges: edges
            }
            // elements: [
            //     { data: { id: 'a' } },
            //     { data: { id: 'b' } },
            //     {
            //         data: {
            //             id: 'ab',
            //             source: 'a',
            //             target: 'b'
            //         }
            //     }]
        })
    }

    useEffect(() => {
        drawGraph()
    }, [])

    return (
        <Fragment>
            <h2>Graph Test</h2>
            <div ref={graphRef} style={{ width: '100%', height: '80vh' }}>
            </div>
        </Fragment>
    )
}

export default GraphTest