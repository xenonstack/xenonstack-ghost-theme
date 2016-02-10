# -*- coding: utf-8 -*-
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import plonetheme.xenonstack


class PlonethemeXenonstackLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        self.loadZCML(package=plonetheme.xenonstack)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'plonetheme.xenonstack:default')


PLONETHEME_XENONSTACK_FIXTURE = PlonethemeXenonstackLayer()


PLONETHEME_XENONSTACK_INTEGRATION_TESTING = IntegrationTesting(
    bases=(PLONETHEME_XENONSTACK_FIXTURE,),
    name='PlonethemeXenonstackLayer:IntegrationTesting'
)


PLONETHEME_XENONSTACK_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(PLONETHEME_XENONSTACK_FIXTURE,),
    name='PlonethemeXenonstackLayer:FunctionalTesting'
)


PLONETHEME_XENONSTACK_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        PLONETHEME_XENONSTACK_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='PlonethemeXenonstackLayer:AcceptanceTesting'
)
