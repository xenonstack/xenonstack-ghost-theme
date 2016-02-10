# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plonetheme.xenonstack.testing import PLONETHEME_XENONSTACK_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that plonetheme.xenonstack is properly installed."""

    layer = PLONETHEME_XENONSTACK_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if plonetheme.xenonstack is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'plonetheme.xenonstack'))

    def test_browserlayer(self):
        """Test that IPlonethemeXenonstackLayer is registered."""
        from plonetheme.xenonstack.interfaces import (
            IPlonethemeXenonstackLayer)
        from plone.browserlayer import utils
        self.assertIn(IPlonethemeXenonstackLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = PLONETHEME_XENONSTACK_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['plonetheme.xenonstack'])

    def test_product_uninstalled(self):
        """Test if plonetheme.xenonstack is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'plonetheme.xenonstack'))
