// SPDX-FileCopyrightText: 2026 Ivan Zorin <creator@localzet.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
// Source: https://github.com/localzet/cluster-docs

import nextVitals from 'eslint-config-next/core-web-vitals'

export default [
  ...nextVitals,
  { ignores: ['.next/**', 'out/**', 'node_modules/**'] },
]
