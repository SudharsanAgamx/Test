// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'getting-started/index' },
      items: [
        'getting-started/quickstart',
        'getting-started/installation',
        'getting-started/basic-concepts',
        'getting-started/first-project',
      ],
    },
    {
      type: 'category',
      label: 'Architecture Overview',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'architecture/index' },
      items: [
        'architecture/multi-agent-system',
        'architecture/data-flow',
        'architecture/integration-points',
        'architecture/scalability',
        'architecture/security-model',
      ],
    },
    {
      type: 'category',
      label: 'Agents & Orchestration',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'agents/agents-index' },
      items: [
        'agents/agent-types',
        'agents/orchestrator',
        'agents/database-agent',
        'agents/email-agent',
        'agents/agent-registry',
        'agents/agent-lifecycle',
      ],
    },
    {
      type: 'category',
      label: 'Evaluation & Testing',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'evaluation/evaluation-index' },
      items: [
        'evaluation/db-evaluation',
        'evaluation/email-evaluation',
        'evaluation/test-strategy',
        'evaluation/writing-tests',
        'evaluation/reporting',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Integrations',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'tools/tools-index' },
      items: [
        'tools/email-tools',
        'tools/db-tools',
        'tools/auth',
        'tools/custom-tools',
        'tools/integration-guides',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'developer-guide/developer-guide-index' },
      items: [
        'developer-guide/setup-environment',
        'developer-guide/agent-development',
        'developer-guide/workflow-design',
        'developer-guide/debugging',
        {
          type: 'category',
          label: 'Examples',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'developer-guide/examples/examples-index' },
          items: [
            'developer-guide/examples/db-automation',
            'developer-guide/examples/email-automation',
            'developer-guide/examples/custom-integrations',
          ],
        },
        'developer-guide/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'operations/operations-index' },
      items: [
        {
          type: 'category',
          label: 'Deployment',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'operations/deployment/deployment-index' },
          items: [
            'operations/deployment/deployment-docker',
            'operations/deployment/deployment-cloud',
          ],
        },
        {
          type: 'category',
          label: 'Monitoring',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'operations/monitoring/monitoring-index' },
          items: [
            'operations/monitoring/monitoring-metrics',
            'operations/monitoring/monitoring-logging',
            'operations/monitoring/monitoring-alerting',
          ],
        },
        {
          type: 'category',
          label: 'Maintenance',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'operations/maintenance/maintenance-index' },
          items: [
            'operations/maintenance/maintenance-updates',
            'operations/maintenance/maintenance-backups',
            'operations/maintenance/maintenance-troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          collapsible: true,
          collapsed: false,
          link: { type: 'doc', id: 'operations/security/security-index' },
          items: [
            'operations/security/security-access-control',
            'operations/security/security-encryption',
            'operations/security/security-compliance',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
