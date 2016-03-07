module.exports= function($scope, $state, TestService){
		console.log('enter controller_72')
		$scope.test = TestService.getTest()
	}
